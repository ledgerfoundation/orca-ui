import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, Link } from '@material-ui/core';
import { useImgUpload } from '../utils/use-img-upload';
import theme from '../config/theme';
import { useAppStore } from '../store/app-store.hook';

const {
  typography: { pxToRem },
} = theme;

const useStyles = makeStyles({
  full_stretch: {
    objectFit: 'cover',
    width: '100%',
  },
  remove_btn: {
    position: 'absolute',
    color: '#3140FF',
    backgroundColor: '#fff',
    minWidth: pxToRem(20),
    height: pxToRem(20),
    borderRadius: pxToRem(10),
    border: 'solid 1px #3140FF',
    transform: 'scale(1) translate(50%, -50%)',
    transformOrigin: '100% 0%',
    right: pxToRem(210),
    '@media (max-width:599px) and (min-width:425px)': {
      right: pxToRem(64),
    },
    '@media (max-width:425px)': {
      right: pxToRem(64),
    },
    '&:hover': {
      backgroundColor: '#fff',
    },
  },
  imageResizerPrompt: {
    fontSize: pxToRem(12),
    textDecoration: 'none !important',
    color: 'blue',
  },
  imageResizerLink: {
    fontSize: pxToRem(12),
    color: 'blue',
    paddingLeft: pxToRem(4),
    fontWeight: 'bold',
    textDecoration: 'underline !important',
  },
});

const ImgUploader = ({
  className,
  imgUrl,
  onLoad,
  onRemove,
  allowedDimensions,
  errorMessage,
  text,
}) => {
  const { showErrorMessage } = useAppStore().notificationsStore;
  const classes = useStyles();
  const [dragRoot, error] = useImgUpload(
    { onLoad, onRemove },
    {
      allowedDimensions,
      errorMessage,
    },
  );

  React.useEffect(() => {
    showErrorMessage(error);
  }, [error]);

  return (
    <div className={className}>
      {imgUrl && (
        <Button className={classes.remove_btn} onClick={dragRoot.remove}>
          X
        </Button>
      )}
      <div {...dragRoot.getRootProps()}>
        <input {...dragRoot.getInputProps()} />
        <div className={classes.full_stretch}>
          {imgUrl ? (
            <img className={classes.full_stretch} src={imgUrl} alt={imgUrl} />
          ) : (
            <div>{text}</div>
          )}
        </div>
      </div>
      {error && (
        <Link href="https://picresize.com/" target="_blank" rel="noopener">
          <Typography className={classes.imageResizerPrompt}>
            If you image is too large, please use an
            <span className={classes.imageResizerLink}>image resizer.</span>
          </Typography>
        </Link>
      )}
    </div>
  );
};

ImgUploader.propTypes = {
  className: PropTypes.string,
  imgUrl: PropTypes.string,
  onLoad: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  allowedDimensions: PropTypes.arrayOf(PropTypes.shape({})),
  errorMessage: PropTypes.string,
  text: PropTypes.string,
};

ImgUploader.defaultProps = {
  className: '',
  imgUrl: null,
  allowedDimensions: [],
  errorMessage: 'Something went wrong during img uploading...',
  text: 'Please Drop your image here',
};

export default ImgUploader;
