using System.Diagnostics;
using API.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var debug = true;
builder.Services.AddControllers();
builder.Services.AddDbContext<DataContext>(opt => {
    // opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
    if(debug) opt.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnectionTEST"));
    else opt.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});
builder.Services.AddCors();


var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseCors(builder => builder.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://localhost:4200"));

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
