using System.ComponentModel.DataAnnotations;

namespace server.Models;

public class Ship
{
    public long Id { get; set; }
    public string Name { get; set; } = null!; 
    public string Code { get; set; } = null!; // AAAA-1111-A1
    public float Length { get; set; }
    public float Width { get; set; }
}