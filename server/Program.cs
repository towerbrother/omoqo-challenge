using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.ActionFilters;
using server.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

// Register a ValidationFilterAttribute
builder.Services.AddScoped<ValidationFilterAttribute>();

// Allow custom validation error and remove default ApiControllers attribute behaviour
builder.Services.Configure<ApiBehaviorOptions>(options =>
{
    options.SuppressModelStateInvalidFilter = true;
});

// Registered with the dependency injection container
builder.Services.AddDbContext<ShipContext>(options =>
{
    options.UseInMemoryDatabase("ShipDB");
});

// Register Cors
builder.Services.AddCors();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

// Added Cors policy
app.UseCors(options => options.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000"));

app.MapControllers();

app.Run();
