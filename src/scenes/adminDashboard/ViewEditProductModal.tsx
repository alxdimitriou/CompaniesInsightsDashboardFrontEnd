import { Box, Button, Fade, Modal, useTheme } from '@mui/material'
import { useState } from 'react'
import ViewEditProduct from './ViewEditProduct'
import Backdrop from '@mui/material/Backdrop';

const ViewEditProductModal = () => {

    const { palette } = useTheme();

      //for the modals
      const [viewEditProductOpen, setViewEditProductOpen] = useState(false);
      const viewEditProductHandleOpen = () => setViewEditProductOpen(true);
      const viewEditProductHandleClose = () => setViewEditProductOpen(false);

        const viewEditProductStyle = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: "fit-content",//removes white space at the end of data grid columns
            transform: 'translate(-50%, -50%)',
            bgcolor: '#2d2d34',
            border: '2px solid #000',
            boxShadow: 24,
            //p:4            
        };

  return (
            <div>          
                <Button  variant="outlined" 
                         size="large"
                         onClick={viewEditProductHandleOpen}
                  sx={{
                     
                      color: palette.tertiary[600],
                      borderColor:palette.tertiary[600],
                  }}
                >
                    View/Edit Product
              </Button>

              <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={viewEditProductOpen}
                        onClose={viewEditProductHandleClose}
                        closeAfterTransition
                        slots={{ backdrop: Backdrop }}
                        slotProps={{
                          backdrop: {
                            timeout: 500,                                          
                          },
                        }}                     
               >

                  <Fade in={viewEditProductOpen}>

                  <Box sx={viewEditProductStyle} overflow="visible">                
                      <ViewEditProduct />                                                 
                  </Box>

                  </Fade>

              </Modal>
        </div>
  )
}

export default ViewEditProductModal