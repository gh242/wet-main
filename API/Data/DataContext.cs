using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<AppUser> Users { get; set; }
        public DbSet<BarcodeInvalid> Barcode_Invalid { get; set; }
        public DbSet<User_t> Users_t { get; set; }
    }
}