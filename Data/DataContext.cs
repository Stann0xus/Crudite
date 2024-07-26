using Microsoft.EntityFrameworkCore;
using Crudite.Models;

namespace Crudite.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Pessoa> Pessoas { get; set; }
    }
}
