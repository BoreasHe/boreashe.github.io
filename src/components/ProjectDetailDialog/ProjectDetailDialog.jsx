import './ProjectDetailDialog.scss';
import React, { useEffect } from 'react';
import { Button, Dialog, DialogContent, DialogTitle, DialogActions, IconButton, Typography, Container, Chip } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Carousel from 'react-material-ui-carousel'

const CustomDialogTitle = (({ title, onCloseAction }) => {
    return (
        <DialogTitle disableTypography className="dialog-background dialog-title">
            <Typography variant="h5" className="dialog-title-text">{title}</Typography>
            {onCloseAction ? (
                <IconButton aria-label="close" onClick={onCloseAction} style={{ position: 'absolute', top: "7px", right: "10px" }}>
                    <CloseIcon className="dialog-title-button" />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
});

export const ProjectDetailDialog = ({ data, toggleOpen, onClose }) => {
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        onClose();
        setOpen(false);
    };

    useEffect(() => {
        setOpen(toggleOpen);
    }, [toggleOpen]);

    return (
        <Dialog onClose={handleClose} disableEnforceFocus open={open} fullWidth="md" maxWidth="md" className="dialog-outline">
            <CustomDialogTitle id="customized-dialog-title" title={data.title} onCloseAction={handleClose} />

            <DialogContent dividers className="dialog-background">
                <Carousel animation="slide" autoPlay={false} className="carousel" navButtonsAlwaysVisible={true}>
                    {
                        data.slides.map(entry => {
                            return (<CarouselItem desc={entry.desc} image={entry.image} />);
                        })
                    }
                </Carousel>
            </DialogContent>
            <DialogActions className="dialog-background dialog-footer">
                <div className="dialog-auth">
                    <span className="dialog-title-text">By: </span>
                    {
                        data.authors.map(author => {
                            return (<Chip
                                className="dialog-auth-chip"
                                label={author}
                            />)
                        })
                    }
                </div>
                <Button
                    className={data.link ? "dialog-link-button" : "disabled-button"}
                    autoFocus
                    onClick={() => window.open(data.link)}
                    disabled={!data.link}
                >
                    Project Link
                </Button>
            </DialogActions>
        </Dialog>

    );
}

const CarouselItem = ({ desc, image }) => {
    return (
        <Container>
            <p className="dialog-content-text">{desc}</p>
            <div style={{ backgroundImage: "url(" + image + ")" }} className="slide-image" />
        </Container>
    )
}