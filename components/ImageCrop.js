/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Typography, Button, CircularProgress } from '@material-ui/core/';
import PublishIcon from '@material-ui/icons/Publish';
import Cropper from 'react-easy-crop';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import theme from '../config/theme';
import getCroppedImg from '../utils/cropImage';
import ImgUploader from './ImgUploader';
import OverModal from './OverModal';

const {
  typography: { pxToRem },
  breakpoints,
} = theme;

const ImageCrop = ({
  imageModalOpen,
  setImageModalOpen,
  mediaObject,
  onSave,
  isLoading,
  cropType,
  subText,
  aspect,
  cropShape,
}) => {
  const useStyles = makeStyles({
    root: {
      padding: useMediaQuery(breakpoints.up('sm')) ? '0px 93px' : '0px 30px',
    },
    cropContainer: {
      margin: 'auto',
      position: 'relative',
      width: `${cropType === 'COVER' ? '100%' : '55%'}`,
      height: pxToRem(320),
      background: '#333',
      [theme.breakpoints.up('sm')]: {
        height: pxToRem(320),
      },
    },
    icon: {
      fontSize: pxToRem(16),
      color: 'blue',
    },
    cropButton: {
      flexShrink: 0,
      marginLeft: 16,
    },
    controls: {
      margin: 'auto',
      padding: pxToRem(5),
      flexDirection: 'column',
      alignItems: 'stretch',
      width: '50%',
      justifyContent: 'center',
      display: 'flex',
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        alignItems: 'center',
      },
    },
    sliderContainer: {
      display: 'flex',
      flex: '1',
      alignItems: 'center',
    },
    sliderLabel: {
      [theme.breakpoints.down('xs')]: {
        minWidth: pxToRem(65),
      },
    },
    slider: {
      padding: `${pxToRem(22)} 0`,
      marginLeft: pxToRem(20),
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: `0 ${pxToRem(16)}`,
      },
    },
    zoomLabel: {
      paddingRight: pxToRem(10),
    },
    body: {
      margin: `${
        cropType === 'PROFILE' || cropType === 'TEMPLATE' ? pxToRem(10) : pxToRem(7)
      } ${pxToRem(30)}`,
      fontSize: pxToRem(12),
    },
    imageUploader: {
      display: 'flex',
      marginLeft: pxToRem(15),
      '&:hover, &:focus': {
        cursor: 'pointer',
      },
      justifyContent: 'center',
    },
    button: {
      textDecoration: 'underline',
      paddingLeft: pxToRem(10),
      fontFamily: 'Josefin Sans',
      fontWeight: '700',
      fontSize: pxToRem(13),
      lineHeight: pxToRem(20),
      color: 'blue',
    },
    saveButton: {
      width: pxToRem(220),
      fontFamily: 'Josefin Sans',
      fontWeight: '700',
      fontSize: pxToRem(12),
      lineHeight: pxToRem(19),
      color: 'blue',
      border: `${pxToRem(2)} solid blue`,
      marginLeft: pxToRem(20),
    },
    actions: {
      padding: `${pxToRem(14)} ${pxToRem(20)}`,
      display: 'flex',
      justifyContent: 'center',
    },
    rightIcon: {
      fontSize: pxToRem(20),
    },
    defaultWarning: {
      padding: pxToRem(15),
      paddingTop: 0,
    },
  });

  const classes = useStyles();
  const [crop, setCrop] = React.useState({ x: 0, y: 0 });
  const [rotation, setRotation] = React.useState(0);
  const [zoom, setZoom] = React.useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = React.useState(null);
  const [imageToCrop, setImageToCrop] = React.useState(null);
  const defaultImage = '/no-image-icon.png';

  React.useEffect(() => {
    if (mediaObject) {
      setImageToCrop(mediaObject);
    }
  }, [mediaObject]);

  const onCropComplete = React.useCallback((croppedArea, croppedAreaPixelsArg) => {
    setCroppedAreaPixels(croppedAreaPixelsArg);
  }, []);

  const showCroppedImage = React.useCallback(async () => {
    let correctDropBoxUrl = imageToCrop;
    // if it's changed, we want to skip everything because it's already a blob
    if (mediaObject === imageToCrop) {
      correctDropBoxUrl = imageToCrop.replace('www.dropbox', 'dl.dropboxusercontent');
    }
    try {
      const croppedImageBlob = await getCroppedImg(correctDropBoxUrl, croppedAreaPixels, rotation);
      // this is done to keep the name of the image consistent so that it
      // updates in all places, eg /templateid/img.png
      const file = new File([croppedImageBlob], 'img.png', {
        type: 'image/png',
        lastModified: new Date(),
      });

      await onSave({ url: croppedImageBlob, file });
      setImageModalOpen(false);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e, 'error');
    }
  }, [croppedAreaPixels, rotation]);

  return (
    <>
      <OverModal open={imageModalOpen} onClose={() => setImageModalOpen(false)}>
        <div className={classes.root}>
          <Typography variant="h3">EDIT {cropType} IMAGE</Typography>
          <Typography className={classes.body} variant="body2">
            {subText}
          </Typography>
          <div className={classes.cropContainer}>
            <Cropper
              cropShape={cropShape}
              image={imageToCrop}
              crop={crop}
              zoom={zoom}
              aspect={aspect}
              onRotationChange={e => setRotation(e)}
              onCropChange={e => setCrop(e)}
              onCropComplete={onCropComplete}
              onZoomChange={e => setZoom(e)}
            />
          </div>
          <div className={classes.controls}>
            <div className={classes.sliderContainer}>
              <div className={classes.zoomLabel}>Zoom</div>
              <Slider
                className={classes.slider}
                color="secondary"
                disabled={imageToCrop === defaultImage}
                value={zoom}
                min={1}
                max={3}
                step={0.1}
                aria-label="Zoom"
                onChange={(e, zoomArg) => setZoom(zoomArg)}
              />
            </div>
          </div>
          {imageToCrop === defaultImage && (
            <div className={classes.defaultWarning}>
              This is the default image, please upload a new image for your class template!
            </div>
          )}
          {!isLoading && (
            <div className={classes.imageUploader}>
              <PublishIcon className={classes.icon} />
              <ImgUploader
                className={classes.button}
                onLoad={e => setImageToCrop(e.url)}
                text="UPLOAD NEW IMAGE"
              />
            </div>
          )}

          <div className={classes.actions}>
            <Button
              className={classes.button}
              color="secondary"
              size="small"
              onClick={() => setImageModalOpen(false)}
            >
              Cancel
            </Button>
            {isLoading ? (
              <CircularProgress color="secondary" />
            ) : (
              <Button
                size="small"
                className={classes.saveButton}
                disabled={!!isLoading || imageToCrop === defaultImage}
                onClick={showCroppedImage}
              >
                <ArrowRightAltIcon fontSize="large" />
                Save cropped image
              </Button>
            )}
          </div>
        </div>
      </OverModal>
    </>
  );
};

ImageCrop.propTypes = {
  mediaObject: PropTypes.string.isRequired,
  imageModalOpen: PropTypes.bool.isRequired,
  setImageModalOpen: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  cropType: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
  cropShape: PropTypes.string,
  aspect: PropTypes.number.isRequired,
};

ImageCrop.defaultProps = {
  cropShape: 'null',
};

export default ImageCrop;
