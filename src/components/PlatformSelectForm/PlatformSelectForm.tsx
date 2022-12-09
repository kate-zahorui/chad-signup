import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Select from 'react-select';

import { Button } from '../';
// import s from './PlatformSelectForm.module.css';

interface IProps {
  options: string[];
}

interface IOption {
  value: string;
  label: string;
}

const PlatformSelectForm: React.FunctionComponent<IProps> = ({ options }) => {
  const [isSelective, setIsSelective] = useState(true);
  const [platform, setPlatform] = useState('');
  const [selectedOption, setSelectedOption] = useState<IOption | null>(null);
  const platformInputId = nanoid();

  useEffect(() => {
    if (selectedOption?.value !== 'Other') return;
    setIsSelective(false);
  }, [selectedOption]);

  const optionsToSelect = options.map((i: string) => ({ value: i, label: i }));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setPlatform(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setPlatform('');
    setSelectedOption(null);

    // navigate();
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor={platformInputId}>Platform</label>
      {isSelective ? (
        <Select
          // common
          id={platformInputId}
          name="platform"
          placeholder="Select platform"
          required
          // for select
          defaultValue={selectedOption}
          value={selectedOption}
          onChange={setSelectedOption}
          options={optionsToSelect}
        />
      ) : (
        <input
          id={platformInputId}
          name="platform"
          placeholder="Enter your platform here"
          required
          value={platform}
          onChange={handleInputChange}
        />
      )}

      <Button text="Submit" />
    </form>
  );
};

export default PlatformSelectForm;
