FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /source
COPY . .
RUN dotnet restore "DemoBE.csproj" --disable-parallel
RUN dotnet publish "DemoBE.csproj" -c release -o /app --no-restore

FROM mcr.microsoft.com/dotnet/sdk:6.0
WORKDIR /app

EXPOSE 80
ARG env=Development
ENV ASPNETCORE_ENVIRONMENT=$env
ENV ASPNETCORE_URLS=http://+:80
COPY --from=build /app ./

ENTRYPOINT ["dotnet", "DemoBE.dll"]
