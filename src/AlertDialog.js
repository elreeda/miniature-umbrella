import React from 'react';
import { AlertDialog, styles } from '@interop-ui/react-alert-dialog';
import { motion } from "framer-motion"

import { styled } from './stitches.config';
import './App.css'

const Overlay = styled('div', {
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
})

const OverlayMotion = ({ children, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        transitionDelay: 0.15,
        transition: { duration: 0.15 }
      }}>
      <Overlay {...props} data-testid="12312">
        {children}
      </Overlay>
    </motion.div>
  )
}

const Content = styled('div', {
  position: 'fixed',
  backgroundColor: '#FFF',
  padding: '30px 40px',
  borderRadius: '0.5rem',
  top: 100,
  left: '50%',
  transform: 'translateX(-50%)'
})

const ContentMotion = ({ children, ...props }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{
      opacity: 1,
      scale: 1,
      transitionDelay: 0.15,
      transition: { duration: 0.15 }
    }}
  >
    <Content {...props}>
      {children}
    </Content>
  </motion.div>
)

const mockFetch = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('some error')
    }, 1000);
  })
}

const AlertDialogPlayground = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  const deleteFiles = async (e) => {
    e.preventDefault()
    const response = await mockFetch()
    console.log('show errors message')
  }

  return (
    <AlertDialog isOpen={isOpen} onIsOpenChange={setIsOpen}>
      <AlertDialog.Trigger style={styles.trigger}>Delete everything</AlertDialog.Trigger>
      <AlertDialog.Overlay as={OverlayMotion} style={styles.overlay} />
      <AlertDialog.Content as={Content}>
        <AlertDialog.Title style={styles.title}>Are you sure?</AlertDialog.Title>
        <AlertDialog.Description style={styles.description}>
          This will do a very dangerous thing. Thar be dragons!
        </AlertDialog.Description>
        <AlertDialog.Action style={styles.action} onClick={deleteFiles}>
          Delete them
        </AlertDialog.Action>
        <AlertDialog.Cancel style={styles.cancel}>Never mind</AlertDialog.Cancel>
      </AlertDialog.Content>
    </AlertDialog>
  );
}

export default AlertDialogPlayground;
