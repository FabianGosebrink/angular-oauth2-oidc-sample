using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

[Authorize]
[ApiController]
[Route("api/[controller]")]
public class SecureValuesController : ControllerBase
{
    [HttpGet(Name = nameof(GetAll))]
    public ActionResult GetAll()
    {
        var genesisMember = new { Id = 1, FirstName = "Phil", LastName = "Collins" };
        return Ok(genesisMember);
    }
}