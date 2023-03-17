import { useEffect, useState } from 'react'

const useLottieUrl = () => {
  const [animationData, setAnimationData] = useState(null)

  useEffect(() => {
    ;(async function () {
      const response = await fetch('https://assets4.lottiefiles.com/packages/lf20_ypej3gd9.json')
      const data = await response.json()
      setAnimationData(data)
    })()
  }, [])

  return animationData
}

export default useLottieUrl
