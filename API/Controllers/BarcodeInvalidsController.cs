using System.ComponentModel.DataAnnotations;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")] // /api/barcodeinvalids
    public class BarcodeInvalidsController : ControllerBase
    {
        private readonly DataContext _context;
        public BarcodeInvalidsController(DataContext context)
        {
            _context = context;
        }

        [Key]
        public int Id { get; set; } // must be public!

        [HttpGet]
        public async Task<ActionResult<IEnumerable<BarcodeInvalid>>> GetBarcodes()
        {
            var results = await _context.Barcode_Invalid.ToArrayAsync();
            
            return results;
        }
        // public ActionResult<IEnumerable<BarcodeInvalid>> GetBarcodes()
        // {
        //     var results = _context.Barcode_Invalid.ToArray();
            
        //     return results;
        // }

        [HttpGet("{empno}")] // /api/barcodeinvalids/2
        public async Task<ActionResult<BarcodeInvalid>> GetBarcodebyEmpno(string empno)
        {
            // return _context.Barcode_Invalid.Find(empno);
           
            var results = await _context.Barcode_Invalid
            // .Where(u => u.EmpNo.Equals(empno)).ToListAsync();
            .Where(u => u.Barcode.Equals(empno)).ToListAsync();
                // .Select(u => new
                // {
                //     u.ID,
                //     empno = u.EmpNo,
                //     u.Barcode,
                //     u.Stamp,
                //     u.Remark,
                //     u.Repack
                //     // Roles = u.UserRoles.Select(r => r.Role.Name).ToList()
                // });
            
             return Ok(results);
        }
    }
}