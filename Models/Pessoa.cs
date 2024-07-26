using System.ComponentModel.DataAnnotations;

namespace Crudite.Models
{
    public class Pessoa
    {
        [Key]
        public int IdPessoa { get; set; }

        [Required]
        public string Nome { get; set; }

        [Required]
        public string Cpf { get; set; }

        [Required]
        public DateTime DataNascimento { get; set; }
    }
}
