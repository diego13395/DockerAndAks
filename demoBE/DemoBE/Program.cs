var allowedOrigins = "allowed_origins";
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors(opts =>
{
    opts.AddPolicy(name: allowedOrigins, policy =>
    {
        policy.WithOrigins("http://20.195.98.233", "http://20.195.98.233:4200").AllowAnyHeader().AllowAnyMethod();
    });
});
builder.Services.AddControllers();
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

app.UseAuthorization();
app.UseCors(allowedOrigins);
app.MapControllers();

app.Run();
