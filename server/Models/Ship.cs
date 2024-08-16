using System.ComponentModel.DataAnnotations;

namespace server.Models;

public class Ship
{
    [Required]
    public long Id { get; set; }

    [Required]
    [StringLength(25, MinimumLength = 3, ErrorMessage = "The property Name should have a minimum length of 3 characters and not exceed 25 characters.")]
    public string Name { get; set; } = null!;

    [Required]
    [RegularExpression(@"^[A-Z]{4}-\d{4}-[A-Z]\d$",
         ErrorMessage = "The property Code should follow the required 'AAAA-1111-A1' pattern.")]
    public string Code { get; set; } = null!;

    [Required]
    public float Length { get; set; }

    [Required]
    public float Width { get; set; }
}