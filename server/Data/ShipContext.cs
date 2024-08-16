using Microsoft.EntityFrameworkCore;
using server.Models;

namespace server.Data;

public class ShipContext : DbContext {
    public ShipContext(DbContextOptions<ShipContext> options) : base(options) 
    {
    }

    public DbSet<Ship> Ships { get; set; } = null!;
}