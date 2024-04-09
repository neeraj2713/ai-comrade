'use client'

import { useEffect } from "react"
import {Crisp} from 'crisp-sdk-web'

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('7ec0cc8c-dde5-4da6-a869-81b82d956909')
  }, [])

  return null
}