import * as React from 'react'
import * as Styled from './styles'
import PropTypes from 'prop-types'
import LinearProgress from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import ImageLoader from '../../assets/img/ultra-pokeball-loader.gif'
import GlobalStateContext from '../../Global/GlobalStateContext'

const LinearProgressWithLabel = (props) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center'}}>
      <Box sx={{ width: '100%', mr: 1}}>
        <LinearProgress variant="determinate" {...props} sx={{ height: '15px', borderRadius: '5px' }} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="#ed6c02" fontWeight="900" fontSize="1.5em" >{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  )
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
}

const LinearWithValueLabel = (props) => {
  const [buffer, setBuffer] = React.useState(2)

  React.useEffect(() => {
    const timer = setInterval(() => {
      props.setProgress((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress + 1))
      setBuffer((prevBuffer) => (prevBuffer >= 100 ? 100 : prevBuffer + 2))
    }, 60)
    return () => {
      clearInterval(timer)
    }
  }, [props])

  return (
    <Box sx={{ width: '90%'}}>
      <LinearProgressWithLabel variant="buffer" value={props.progress} valueBuffer={buffer} color="warning" />
    </Box>
  )
}

const ProgressBar = () => {
    const { progress, setProgress } = React.useContext(GlobalStateContext)

    return (
        <Styled.ProgressContent imageLoader={ImageLoader} >
            <LinearWithValueLabel progress={progress} setProgress={setProgress}/>
        </Styled.ProgressContent>
    )
}

export default ProgressBar