import React from 'react';
import './FormInput.scss';

const FormInput = ({handleChange,label,...otheProps}) => (
	<div className="group">
		<input
		className="form-input" onChange={handleChange} {...otheProps}/>
		{
			label?(<label
			className={`${otheProps.value.lenght ? 'shrink' : ''} form-input-label `}>
				{label}
			</label>):null
		}
	</div>
);

export default FormInput;
