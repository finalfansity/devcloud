package conf

type app struct {
	Name string `toml:"name"`
	Host string `toml:"host"`
	Port string `toml:"port"`
}

type log struct {
	Level  string `toml:"level"`
	Path   string `toml:"path"`
	Format string `toml:"format"`
	To     string `toml:"to"`
}

type mySQL struct {
	Host     string `toml:"host"`
	Port     string `toml:"port"`
	Username string `toml:"username"`
	Password string `toml:"password"`
	Database string `toml:"database"`
}

type Config struct {
	App   *app   `toml:"app"`
	Log   *log   `toml:"log"`
	MySQL *mySQL `toml:"mysql"`
}
