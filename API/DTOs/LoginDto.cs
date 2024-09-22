using System.ComponentModel.DataAnnotations;

namespace API.DTOs;

public class LoginDto
{
    [Required]
    [MaxLength(50)]
    public required string UserName { get; set; }
    [Required]
    [MaxLength(50)]
    public required string Password { get; set; }
}
