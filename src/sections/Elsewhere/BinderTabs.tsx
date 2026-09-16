import { type KeyboardEvent, useRef, useState } from 'react'
import { hobbyGalleries } from '../../content/elsewhere.ts'
import type { HobbyId } from '../../types/content.ts'
import { HobbyGallery } from './HobbyGallery.tsx'
import styles from './BinderTabs.module.css'

const adjacentTabs: Record<
  HobbyId,
  Readonly<{ previous: HobbyId; next: HobbyId }>
> = {
  golf: { previous: 'crochet', next: 'crochet' },
  crochet: { previous: 'golf', next: 'golf' },
}

export function BinderTabs() {
  const [activeTab, setActiveTab] = useState<HobbyId>('golf')
  const tabRefs = useRef<Record<HobbyId, HTMLButtonElement | null>>({
    golf: null,
    crochet: null,
  })
  const activeGallery = hobbyGalleries.find(
    (gallery) => gallery.id === activeTab,
  )

  if (!activeGallery) {
    throw new Error(`Missing hobby gallery for ${activeTab}`)
  }

  function activateTab(id: HobbyId) {
    setActiveTab(id)
    tabRefs.current[id]?.focus()
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, id: HobbyId) {
    let destination: HobbyId | undefined

    switch (event.key) {
      case 'ArrowLeft':
        destination = adjacentTabs[id].previous
        break
      case 'ArrowRight':
        destination = adjacentTabs[id].next
        break
      case 'Home':
        destination = 'golf'
        break
      case 'End':
        destination = 'crochet'
        break
    }

    if (destination) {
      event.preventDefault()
      activateTab(destination)
    }
  }

  return (
    <div className={styles.binder}>
      <div
        aria-label="Hobby gallery categories"
        className={styles.tabs}
        role="tablist"
      >
        {hobbyGalleries.map((gallery) => {
          const isActive = gallery.id === activeTab

          return (
            <button
              aria-controls={`${gallery.id}-panel`}
              aria-selected={isActive}
              className={styles.tab}
              data-hobby={gallery.id}
              id={`${gallery.id}-tab`}
              key={gallery.id}
              onClick={() => {
                activateTab(gallery.id)
              }}
              onKeyDown={(event) => {
                handleKeyDown(event, gallery.id)
              }}
              ref={(node) => {
                tabRefs.current[gallery.id] = node
              }}
              role="tab"
              tabIndex={isActive ? 0 : -1}
              type="button"
            >
              {gallery.label}
            </button>
          )
        })}
      </div>
      <div
        aria-labelledby={`${activeGallery.id}-tab`}
        className={styles.sheet}
        id={`${activeGallery.id}-panel`}
        role="tabpanel"
      >
        <HobbyGallery gallery={activeGallery} />
      </div>
    </div>
  )
}
