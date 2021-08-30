using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CountryController : ControllerBase
    {
        private readonly DonationDBContext _context;

        public CountryController(DonationDBContext context)
        {
            _context = context;
        }
        // GET: api/<CountryController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Country>>> GetCountrys()
        {
            return await _context.Countries.ToListAsync();
        }


        // GET api/<CountryController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Country>> Get(int id)
        {
            var country = await _context.Countries.FindAsync(id);

            if (country == null)
            {
                return NotFound();
            }

            return country;
        }

        // POST api/<CountryController>
        [HttpPost]
        public async Task<ActionResult<Country>> Post(Country country)
        {
            _context.Countries.Add(country);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Get", new { Id = country.Id }, country);

        }

        // PUT api/<CountryController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id,Country country)
        { 
              country.Id = id;

            _context.Entry(country).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
    }
            catch (DbUpdateConcurrencyException)
            {
                if (!CountryExists(id))
                {
                    return NotFound();
}
                else
                    {
                        throw;
                    }
            }

            return NoContent();
        }

        // DELETE api/<CountryController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Country>> Delete(long Id)
        {

            var country = await _context.Countries.FindAsync(Id);
            if (country == null)
            {
                return NotFound();
            }

            _context.Countries.Remove(country);
            await _context.SaveChangesAsync();

            return country;
        }
        private bool CountryExists(int id)
        {
            return _context.DCandidates.Any(e => e.id == id);
        }
    }
}
