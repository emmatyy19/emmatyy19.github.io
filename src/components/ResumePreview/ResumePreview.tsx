import { useEffect, useRef, useState } from 'react'
import { HiOutlineDocumentText, HiOutlineXMark } from 'react-icons/hi2'
import resumePreviewUrl from '../../assets/resume/emma-resume-preview.webp'
import type { ProfessionalLink } from '../../types/content.ts'
import styles from './ResumePreview.module.css'

type ResumePreviewProps = Readonly<{
  link: ProfessionalLink
}>

export function ResumePreview({ link }: ResumePreviewProps) {
  const [isOpen, setIsOpen] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    const trigger = triggerRef.current
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
      trigger?.focus()
    }
  }, [isOpen])

  return (
    <>
      <button
        className={styles.trigger}
        onClick={() => {
          setIsOpen(true)
        }}
        ref={triggerRef}
        type="button"
      >
        <HiOutlineDocumentText aria-hidden="true" className={styles.icon} />
        {link.label}
      </button>

      {isOpen ? (
        <div
          aria-labelledby="resume-preview-title"
          aria-modal="true"
          className={styles.backdrop}
          role="dialog"
        >
          <button
            aria-label="Dismiss resume preview"
            className={styles.backdropClose}
            onClick={() => {
              setIsOpen(false)
            }}
            tabIndex={-1}
            type="button"
          />
          <section className={styles.dialog}>
            <header className={styles.header}>
              <h2 id="resume-preview-title">Resume</h2>
              <button
                aria-label="Close resume preview"
                className={styles.closeButton}
                onClick={() => {
                  setIsOpen(false)
                }}
                ref={closeButtonRef}
                type="button"
              >
                <HiOutlineXMark aria-hidden="true" />
              </button>
            </header>

            <div className={styles.documentViewport}>
              <img
                alt="Preview of Emma's resume"
                className={styles.document}
                src={resumePreviewUrl}
              />
            </div>

            <footer className={styles.actions}>
              <a href={link.href} rel="noopener noreferrer" target="_blank">
                Open in new tab
              </a>
              <a download={link.download} href={link.href}>
                Download
              </a>
            </footer>
          </section>
        </div>
      ) : null}
    </>
  )
}
