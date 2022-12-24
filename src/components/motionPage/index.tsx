import type { MotionPageProps } from "../../types"

import { motion } from "framer-motion"

export const MotionPage:React.FC<MotionPageProps> = ({children}) => {

    return (
        <motion.div 
            initial={{opacity: 0}} 
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            {children}
        </motion.div>
    )
}