using Microsoft.AspNetCore.Mvc;

namespace Crudite.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StatusController : ControllerBase
    {
        [HttpGet("status")]
        public IActionResult GetStatus()
        {
            return Ok("Backend funcionando");
        }

        [HttpGet("dbstatus")]
        public IActionResult GetDbStatus()
        {
            // Verifique a conexão com o banco de dados
            return Ok("Banco de dados conectado");
        }
    }
}
