using System.ComponentModel.DataAnnotations;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")] // /api/t_Users
    public class Users_tController : ControllerBase
    {
        private readonly DataContext _context;
        public Users_tController(DataContext context)
        {
            _context = context;
        }

        [Key]
        public int Id { get; set; } // must be public!

        [HttpGet]
        public async Task<ActionResult<IEnumerable<User_t>>> GetUsers()
        {
            var results = await _context.Users_t.ToArrayAsync();
            
            return results;
        }


        // [HttpGet("{empno}")] // /api/users/2
        // public async Task<ActionResult<BarcodeInvalid>> GetBarcodebyEmpno(string empno)
        // {
        //     var results = await _context.Barcode_Invalid
        //     .Where(u => u.EmpNo.Equals(empno)).ToListAsync();
        //      return Ok(results);
        // }


    }
}