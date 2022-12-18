import { connect } from 'react-redux'
import {
  getCurrentNetwork,
  getSendTo,
  getSendToNickname,
  getAddressBookEntry,
} from '../../../../selectors'
import EnsInput from './ens-input.component'
import usePrefix from '../../../../hooks/usePrefix'

export default connect(
  (state) => {
    const selectedAddress = getSendTo(state)
    const { getXDCAddress } = usePrefix()
    return {
      network: getCurrentNetwork(state),
      selectedAddress: getXDCAddress(selectedAddress),
      selectedName: getSendToNickname(state),
      contact: getAddressBookEntry(state, selectedAddress),
    }
  },
)(EnsInput)
