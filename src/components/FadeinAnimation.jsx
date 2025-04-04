import { motion } from "motion/react"
export default function FadeinAnimation() {
    const background = {
        background: 'red',
        width: '300px',
        height: '300px'
    }
  return (
    <div style={{
        display: 'grid',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        <motion.div
            style={background}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}

        >
            
        </motion.div>
    </div>
  )
}