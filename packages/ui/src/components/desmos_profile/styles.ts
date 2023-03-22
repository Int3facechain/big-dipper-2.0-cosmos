import { makeStyles } from 'tss-react/mui';
import chainConfig from '@/chainConfig';

const { chainName } = chainConfig();

// TODO jss-to-tss-react codemod: Unable to handle style definition reliably. ArrowFunctionExpression in CSS prop.
const useStyles = makeStyles<{ coverUrl?: string }>()((theme, { coverUrl }) => ({
  root: {
    overflow: 'hidden',
  },
  cover: {
    height: '150px',
    background: theme.palette.custom.fonts.fontFour,
    backgroundImage: `url("${`/${chainName}`.replace(
      /^\/$/,
      ''
    )}/images/default_cover_pattern.png")`,
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center center',
    margin: theme.spacing(-2, -2, 0, -2),
    overflow: 'hidden',
    backgroundSize: 'contain',
    '& .cover': {
      width: '100%',
      height: '100%',
      backgroundImage: `url(${coverUrl})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    },
    [theme.breakpoints.up('sm')]: {
      height: '100px',
    },
    [theme.breakpoints.up('md')]: {
      height: '120px',
    },
    [theme.breakpoints.up('lg')]: {
      height: '160px',
    },
  },
  avatarContainer: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(1, 0),
    '& .hide': {
      visibility: 'hidden',
    },
    [theme.breakpoints.up('md')]: {
      paddingBottom: theme.spacing(2),
    },
    [theme.breakpoints.up('lg')]: {
      paddingBottom: theme.spacing(3.5),
    },
  },
  avatar: {
    position: 'absolute',
    width: '60px',
    height: '60px',
    minHeight: '60px',
    minWidth: '60px',
    border: `solid 3px ${theme.palette.background.paper}`,
    top: theme.spacing(-3.75),
    left: 0,
    [theme.breakpoints.up('md')]: {
      width: '76px',
      height: '76px',
      minHeight: '76px',
      minWidth: '76px',
      top: theme.spacing(-4.75),
      borderWidth: '4px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '100px',
      height: '100px',
      minHeight: '100px',
      minWidth: '100px',
      top: theme.spacing(-6.25),
      borderWidth: '5px',
    },
  },
  link: {
    color: theme.palette.custom.fonts.highlight,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  nicknameWrapper: {
    margin: theme.spacing(1, 0),
    '& .tag': {
      color: theme.palette.custom.fonts.fontFour,
    },
  },
}));

export default useStyles;
