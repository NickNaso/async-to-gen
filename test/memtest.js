let out;

async function longLoop() {
  for (let i = 0; i < 1000000; i++) await undefined;
  out = true;
}

longLoop().then(() => process.exit(out ? 0 : 1));