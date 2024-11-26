import PropTypes from 'prop-types'

const Type = {
    groupDatas: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        value: PropTypes.string
    })),
    singleData: PropTypes.shape({
        text: PropTypes.string,
        value: PropTypes.string
    }),
    children: PropTypes.node,
    onChange: PropTypes.func,
    chooseData: PropTypes.arrayOf(PropTypes.string)
}

export default Type