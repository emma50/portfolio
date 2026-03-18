import { useEffect } from 'react'

export function useCursor() {
  useEffect(() => {
    // Only run on pointer:fine devices
    if (!window.matchMedia('(pointer: fine)').matches) return

    const cur  = document.getElementById('cursor')
    const ring = document.getElementById('cursor-ring')
    if (!cur || !ring) return

    let mx = 0, my = 0, rx = 0, ry = 0
    let raf: number

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      cur.style.left = `${mx}px`
      cur.style.top  = `${my}px`
    }

    const loop = () => {
      rx += (mx - rx) * 0.13
      ry += (my - ry) * 0.13
      ring.style.left = `${Math.round(rx)}px`
      ring.style.top  = `${Math.round(ry)}px`
      raf = requestAnimationFrame(loop)
    }

    const expand   = () => { cur.classList.add('big');    ring.classList.add('big') }
    const collapse = () => { cur.classList.remove('big'); ring.classList.remove('big') }

    document.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(loop)

    const targets = document.querySelectorAll<HTMLElement>('a, button')
    targets.forEach((el) => {
      el.addEventListener('mouseenter', expand)
      el.addEventListener('mouseleave', collapse)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', expand)
        el.removeEventListener('mouseleave', collapse)
      })
    }
  }, [])
}
