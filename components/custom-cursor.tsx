"use client"

import { useEffect, useRef } from "react"

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const cursor = cursorRef.current
    const ring = ringRef.current
    if (!cursor || !ring) return

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`
    }

    const animate = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.12
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.12
      ring.style.left = `${ringPos.current.x}px`
      ring.style.top = `${ringPos.current.y}px`
      requestAnimationFrame(animate)
    }

    const handleMouseEnter = () => {
      ring.style.width = "54px"
      ring.style.height = "54px"
      cursor.style.opacity = "0"
    }

    const handleMouseLeave = () => {
      ring.style.width = "36px"
      ring.style.height = "36px"
      cursor.style.opacity = "1"
    }

    document.addEventListener("mousemove", handleMouseMove)
    animate()

    const interactiveElements = document.querySelectorAll(
      "a, button, .service-card, .project-card, .chip"
    )
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor hidden md:block" />
      <div ref={ringRef} className="cursor-ring hidden md:block" />
    </>
  )
}
