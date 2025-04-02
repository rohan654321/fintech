"use client"

import type React from "react"

import { createContext, useContext, useReducer, type ReactNode } from "react"

type State = {
  isMenuOpen: boolean
  activeSection: string
  formData: {
    name: string
    email: string
    company: string
    phone: string
    message: string
  }
}

type Action =
  | { type: "TOGGLE_MENU" }
  | { type: "SET_ACTIVE_SECTION"; payload: string }
  | { type: "UPDATE_FORM_FIELD"; field: string; value: string }
  | { type: "RESET_FORM" }

const initialState: State = {
  isMenuOpen: false,
  activeSection: "home",
  formData: {
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  },
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "TOGGLE_MENU":
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      }
    case "SET_ACTIVE_SECTION":
      return {
        ...state,
        activeSection: action.payload,
      }
    case "UPDATE_FORM_FIELD":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.field]: action.value,
        },
      }
    case "RESET_FORM":
      return {
        ...state,
        formData: initialState.formData,
      }
    default:
      return state
  }
}

const StateContext = createContext<{
  state: State
  dispatch: React.Dispatch<Action>
}>({
  state: initialState,
  dispatch: () => null,
})

export const StateProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <StateContext.Provider value={{ state, dispatch }}>{children}</StateContext.Provider>
}

export const useAppState = () => useContext(StateContext)

