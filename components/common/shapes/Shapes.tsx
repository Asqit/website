/** animated svg image for hero section */
export function Shapes() {
  return (
    <svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="512"
      height="512"
      className={"animate-fade-in-up"}
    >
      <title>shapes</title>
      <defs>
        <image
          width="275"
          height="296"
          id="img1"
          className={"md:animate-float"}
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAEoAgMAAAAGev1FAAAAAXNSR0IB2cksfwAAAAlQTFRFHrCfAAAAHrCfutoORgAAAAN0Uk5T/wAARO7wMwAAAG9JREFUeJztzAEJACAMBEBD+maUpTTEYCDcBbi12pLdTywWi8VisVgGl6prsVgsFovFYrFYLBaLxWKxWCwWi8VisVgsFovFYrFYLBaLxWKxWCwWi8VisVgsFovFYrFYLBbLZ0tyqstisVgsFotlcHmShYbKoS+nswAAAABJRU5ErkJggg=="
        />
        <image
          width="248"
          height="248"
          id="img2"
          className={"md:animate-float"}
          style={{ animationDelay: "1.5s" }}
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPgAAAD4AQMAAAD7H7lIAAAAAXNSR0IB2cksfwAAAAZQTFRFAAAAGpGDqD32qAAAAAJ0Uk5TAP9bkSK1AAACQElEQVR4nO2ZQW7DMAwEXfiQY56gp+hp6tP8lD6hRx+MqHVtVRRNcgUwhosiuk6TcFdKY+0OA11jznka1LVi6w/ytjR82/mHwtPOH/bLtTeIv3yxptMmvBEufUAgfDamVxSMma7pwO8N/zTUyQpzuzh+Y/zdUC85EBjnDkTG+YCZL3s8PiAfjw94P/DWQT4eHzAdeLOFx/HaAUeBT+b4rYDj+K2AIHC6A0d5rUAB0x2Q5FGBkjwqUJJHBUryqMAg8iowirwKTCKvOyjiaoAsvxogy68GIC7bUw2S7akGBYUXg6LCl06eFF4MVHAxULOvGIi4Zl8xULOvGIi4Zm8xOKh87uJR5YtpbzEYcRXvGwC4bv+2Abr92wYgrtu/bQDi+vZsG4R4MPj8BB4NvnTwZPBHBzfwzwY7uXU81gOCuHU81gPi5dbxWQ/Q2dw6fusB9PJg8vlyHk2+nM6Tiz/+PDfx9xf0xV/8xf8vTya+/v+Tj5//+4B4MPn1v69nP19c/fx09vOh9/n17Odr9/N/NHjP/cPiPfcf7/0Mce/90Xt/Rfdj7/3bff+PKl+ekl+gfMSbv6B8x5sfoXwK5ltR4b35WVB4yedQvofyQW/+iPJNlI/CfDWKvOazQeQ130X5MMqXUT6N8m/Io4Bpvh4ETvN5lO+jfgD1C6ifQP0G7EdQv4L6GdTvoH4I9kuBcd5PoX4L9WOoX4P9XDsA/3jcD6J+EfaTqN9E/SjsV6sCYXqqQOl3YT+8v4H2ctxPC/32F6TtswQkCPSPAAAAAElFTkSuQmCC"
        />
        <image
          width="244"
          height="244"
          id="img3"
          className={"md:animate-float"}
          style={{ animationDelay: "2s" }}
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPQAAAD0AQMAAACW4Zm9AAAAAXNSR0IB2cksfwAAAAZQTFRFAAAAHrCfN6oX2AAAAAJ0Uk5TAP9bkSK1AAACQ0lEQVR4nKXRuXUEIRBF0eG00aZCIBRSUSYQGqEQgswxdIR6H5aq+izPveZ7vfK+X3LIf+Zcved8+Z3z9W/Ov+Kc6+im3EQ/5TaGKY9RHgxcxSgObnBx8AJ8jVEcjPwrRnEwcr25m3CzuZ9wu3mY8I3FwcDV7sJg5MvuwmDk6+7CYOT7Xmkwcn24m3TPugFuDw/DfrAwGLg6nR2MfDmdHYx8PZ0djPzcyw9Gri93g24u94NuLw+DfjE7GLi6nRmMfLmdGYx8vZ0ZjPzeyw1Grh93Q24e90NuHw9D/jAzGLj6ODkY+fJxcnCHk4NX4J+99GDkOnE34CZxP+A28TDgCZODgavUicHIl9SJwcjX1InByNO91GDkOnPX7SZz3+0289DtGRODgavcq8HIl9yrwcjX3KvByPO99WDkunDX6aZw3+m28NDpBVeDgavS332+lP7b52vpf31e7i0HI9eVuy43lfsut5WHLq+4GNzv2eBqf+HV3mIw8mpvMRh5vTcfjFwT7jrcEO473BIeOpzgbDBwYm82GDmxNxuMnNibDUZO7U0HI9eku2Y3pPtmt6SHZic5GQyc3JsMHvRnMLk/cXJvMhg5vfczGLlm3DW6Ydw3umU8NDrDz2DgzL5nMHJm7zMYObP3GYyc23sPRq5Zd01uWPdNblkPk/4j7sf+Fvdfzu69BiNn916DkfN7z8HIteCuwY3gvsGt4KHBBT4GAxf2HoORC3uPwciFvcdg5NLefTByLbqDbkT30K3oAbrI22Dg/2pvmiP8paLqAAAAAElFTkSuQmCC"
        />
      </defs>
      <style>
      </style>
      <use id="Layer 1" style="opacity: .7" href="#img1" x="124" y="33" />
      <use id="Shape 1" style="opacity: .7" href="#img2" x="249" y="168" />
      <use id="Shape 2" style="opacity: .7" href="#img3" x="136" y="213" />
    </svg>
  );
}
