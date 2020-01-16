
import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

 export const useTheme = (baseValue) => {
  const [theme, setTheme] = useLocalStorage("theme", baseValue);

  useEffect(() => {
    if(theme){
      document.querySelector("body").classList.add("dark-mode")
    } else {
      document.querySelector("body").classList.remove("dark-mode")
    }
    
  }, [theme])

  return [theme, setTheme]
}


