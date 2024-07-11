import React, { useEffect, useRef, useState } from "react"
const Register = () => {
  const userRef = useRef()
  const errRef = useRef()

  const USER_REGEX = /^[a-zA-Z]$/
  const PWR_REGEX = /^[a-zA-Z]$/

  const [user, setuser] = useState("")
  const [validName, setValidName] = useState(false)
  const [userFocus, setUserFocus] = useState(false)

  const [pwd, setPwd] = useState("")
  const [validPwd, setValidPwd] = useState(false)
  const [pwdFocus, setPwdFocus] = useState(false)

  const [matchPwd, setMatchPwd] = useState("")
  const [validMatch, setValidMatch] = useState(false)
  const [matchFocus, setMatchFocus] = useState(false)

  const [errMsg, setErrMsg] = useState("")
  const [success, setSuccess] = useState(false)
  useEffect(() => {
    userRef.current.focus()
    setValidName(result)
  }, [])
  return <div></div>
}

export default Register
