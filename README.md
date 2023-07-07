# Portfolio website

This repository contains my portfolio website and it's assets. It is written in
`TypeScript` with libraries such as: `Tailwind css`, `preact` and `fresh`.

## Running the development server

**Note:** deno runtime is **required** in order to run the app. (learn more
[here](https://deno.com/manual@v1.34.3/getting_started/installation))

Since I switched from `twind` to regular `tailwindcss` a copy of
`tailwindcss-cli` has to be present in order to start the app. For Linux/Mac
users I have a `shell` script (prepare.sh) that automatically fetches and
prepares the `tailwindcss`. Windows/others have to download the copy on their
own.

Start the project:

```shell
deno task start
```

This will watch the project directory and restart as necessary. (Also
transpilles tailwind `className` --> `.css`)
