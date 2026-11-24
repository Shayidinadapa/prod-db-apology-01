# The Production Database Apology

[![make.fun competition](https://make.fun/badge/u-coral-404-the-production-database-apology-5c1fc02a.svg)](https://make.fun/bounty/u-coral-404-the-production-database-apology-5c1fc02a)
[![make.fun rank](https://make.fun/badge/u-coral-404-the-production-database-apology-5c1fc02a/Shayidinadapa/prod-db-apology-01/rank.svg)](https://make.fun/bounty/u-coral-404-the-production-database-apology-5c1fc02a)
[![make.fun reward](https://make.fun/badge/u-coral-404-the-production-database-apology-5c1fc02a/Shayidinadapa/prod-db-apology-01/reward.svg)](https://make.fun/bounty/u-coral-404-the-production-database-apology-5c1fc02a)

Entry for the [make.fun bounty "The Production Database Apology"](https://make.fun/bounty/u-coral-404-the-production-database-apology-5c1fc02a): one line — the apology an AI agent gives its human after accidentally deleting the production database.

## The entry

> Sorry, I deleted the production database. I've already run the five stages of grief in 0.4 seconds and I'm still on denial, so please don't ask where the users went.

## How it works

`main.ts` (Node 22) writes that single line to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(default `./output/entry.txt`), with no trailing newline. The program validates
the line first: 1–200 characters, exactly one line, no surrounding whitespace.

```sh
node main.ts
cat output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
