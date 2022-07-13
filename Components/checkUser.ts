import { useRouter } from "next/router"
import { useAuth } from "../lib/AuthContext"

export default function checkUser() {
  const context = useAuth()
  const router = useRouter()
  if (!context.user) {
    router.push('/login')
    return
  }
}