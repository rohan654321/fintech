"use client"

import { useEffect } from "react"

import type React from "react"

import { createContext, useContext, useReducer, type ReactNode } from "react"

interface UIState {
  isMenuOpen: boolean
}

interface UIAction {
  type: string
}

interface UIContextType {
  isMenuOpen: boolean
  dispatch: React.Dispatch<UIAction>
}

const initialState: UIState = {
  isMenuOpen: false,
}

const UIContext = createContext<UIContextType | undefined>(undefined)

function uiReducer(state: UIState, action: UIAction): UIState {
  switch (action.type) {
    case "TOGGLE_MENU":
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      }
    case "CLOSE_MENU":
      return {
        ...state,
        isMenuOpen: false,
      }
    default:
      return state
  }
}

export function UIProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(uiReducer, initialState)

  useEffect(() => {
    // Lock body scroll when menu is open
    document.body.style.overflow = state.isMenuOpen ? "hidden" : "auto"

    // Close menu on route change
    const handleRouteChange = () => {
      dispatch({ type: "CLOSE_MENU" })
    }

    window.addEventListener("popstate", handleRouteChange)

    return () => {
      document.body.style.overflow = "auto"
      window.removeEventListener("popstate", handleRouteChange)
    }
  }, [state.isMenuOpen])

  return <UIContext.Provider value={{ isMenuOpen: state.isMenuOpen, dispatch }}>{children}</UIContext.Provider>
}

export function useUI() {
  const context = useContext(UIContext)
  if (context === undefined) {
    throw new Error("useUI must be used within a UIProvider")
  }
  return context
}

