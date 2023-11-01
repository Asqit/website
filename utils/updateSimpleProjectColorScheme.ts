export function updateSimpleProjectColorScheme(isDark: boolean): void {
  if (isDark) {
    document.documentElement.style.setProperty(
      "--project-color",
      "rgba(255,255,255,0)"
    );
    return;
  }

  document.documentElement.style.setProperty(
    "--project-color",
    "rgba(225, 225, 225, 0.5)"
  );

  document.documentElement.style.setProperty(
    "--project-border",
    "rgb(150, 150, 150)"
  );
}
