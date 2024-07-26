using Crudite.Data;
using Crudite.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Crudite.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PessoaController : ControllerBase
    {
        private readonly DataContext _context;

        public PessoaController(DataContext context)
        {
            _context = context;
        }

        // Criar uma pessoa
        [HttpPost]
        public async Task<IActionResult> CreatePessoa([FromBody] Pessoa pessoa)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            _context.Pessoas.Add(pessoa);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetPessoa), new { id = pessoa.IdPessoa }, pessoa);
        }

        // Editar uma pessoa
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePessoa(int id, [FromBody] Pessoa pessoa)
        {
            if (id != pessoa.IdPessoa)
                return BadRequest();

            _context.Entry(pessoa).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // Excluir uma pessoa
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePessoa(int id)
        {
            var pessoa = await _context.Pessoas.FindAsync(id);
            if (pessoa == null)
                return NotFound();

            _context.Pessoas.Remove(pessoa);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // Listar todas as pessoas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Pessoa>>> GetPessoas()
        {
            return await _context.Pessoas.ToListAsync();
        }

        // Listar uma pessoa pelo ID
        [HttpGet("{id}")]
        public async Task<ActionResult<Pessoa>> GetPessoa(int id)
        {
            var pessoa = await _context.Pessoas.FindAsync(id);
            if (pessoa == null)
                return NotFound();

            return pessoa;
        }

        // Filtro de pessoas por nome
        [HttpGet("filter")]
        public async Task<ActionResult<IEnumerable<Pessoa>>> FilterPessoas([FromQuery] string nome)
        {
            var pessoas = await _context.Pessoas
                .Where(p => p.Nome.Contains(nome))
                .ToListAsync();
            return pessoas;
        }

        // Emissão de relatórios para CSV
        [HttpGet("report")]
        public IActionResult GetReport()
        {
            var pessoas = _context.Pessoas.ToList();
            var csv = string.Join("\n", pessoas.Select(p => $"{p.IdPessoa},{p.Nome},{p.Cpf},{p.DataNascimento:yyyy-MM-dd}"));
            var bytes = System.Text.Encoding.UTF8.GetBytes(csv);
            var stream = new System.IO.MemoryStream(bytes);
            return File(stream, "text/csv", "pessoas.csv");
        }
    }
}
