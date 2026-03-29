'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { workProjects, type WorkProject } from '@/data/work-projects'
import { PrimaryButton } from './primary-button'

function ProjectModal({
  project,
  onClose,
}: {
  project: WorkProject
  onClose: () => void
}) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    closeBtnRef.current?.focus()
  }, [])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        ref={dialogRef}
        className="relative z-10 w-full max-w-lg rounded-2xl border border-[#1f1f1f] bg-[#111111] p-8 shadow-2xl"
      >
        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg text-white hover:bg-[#1f1f1f] hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00ff88]"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        <div className="mb-6">
          <span className="mb-3 inline-block rounded-full border border-[#1f1f1f] px-2.5 py-0.5 text-xs font-medium text-white">
            {project.tag}
          </span>
          {project.status === 'concept' && (
            <span className="ml-2 inline-block rounded-full border border-[#9333ea40] bg-[#9333ea10] px-2.5 py-0.5 text-xs font-medium text-[#9333ea]">
              Concept
            </span>
          )}
          <h2
            id="modal-title"
            className="mt-3 text-2xl font-bold text-white"
          >
            {project.title}
          </h2>
          <p className="mt-1 text-sm font-medium text-[#00ff88]">{project.subtitle}</p>
        </div>

        <p className="mb-6 text-sm text-white leading-relaxed">{project.details}</p>

        <div className="flex items-center justify-between">
          <span className="text-xs text-white">{project.year}</span>
          <PrimaryButton href="/contact" variant="solid" className="text-sm">
            Start something similar
          </PrimaryButton>
        </div>
      </div>
    </div>
  )
}

export function WorkGrid() {
  const [selected, setSelected] = useState<WorkProject | null>(null)

  const handleClick = useCallback((project: WorkProject) => {
    if (project.url) {
      window.open(project.url, '_blank', 'noopener,noreferrer')
    } else {
      setSelected(project)
    }
  }, [])

  const closeModal = useCallback(() => {
    setSelected(null)
  }, [])

  return (
    <>
      <div
        className="grid gap-6 sm:grid-cols-2"
        role="list"
      >
        {workProjects.map((project) => (
          <div
            key={project.id}
            role="listitem"
            className="group rounded-xl border border-[#1f1f1f] bg-[#111111] p-6 cursor-pointer hover:border-[#00ff8840] hover:bg-[#141414] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00ff88] focus-visible:outline-offset-2"
            onClick={() => handleClick(project)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                handleClick(project)
              }
            }}
            aria-label={`View details for ${project.title}`}
          >
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block rounded-full border border-[#1f1f1f] px-2.5 py-0.5 text-xs font-medium text-white">
                {project.tag}
              </span>
              {project.status === 'concept' && (
                <span className="inline-block rounded-full border border-[#9333ea40] bg-[#9333ea10] px-2.5 py-0.5 text-xs font-medium text-[#9333ea]">
                  Concept
                </span>
              )}
            </div>
            <h3 className="mb-1 font-semibold text-white group-hover:text-[#00ff88] transition-colors">
              {project.title}
            </h3>
            <p className="mb-2 text-xs font-medium text-[#00ff88]">{project.subtitle}</p>
            <p className="text-sm text-white leading-relaxed">{project.description}</p>
            <p className="mt-4 text-xs text-white">
              {project.url ? 'Click to visit site ↗' : 'Click to view details'}
            </p>
          </div>
        ))}
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={closeModal} />
      )}
    </>
  )
}
