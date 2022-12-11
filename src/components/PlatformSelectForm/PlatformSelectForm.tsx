import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { nanoid } from 'nanoid';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';

import { Button } from '../';
// import s from './PlatformSelectForm.module.css';

interface IProps {
  options: string[];
}

interface IOption {
  readonly value: string;
  readonly label: string;
}

const createOption = (label: string): IOption => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ''),
});

const PlatformSelectForm: React.FunctionComponent<IProps> = ({ options }) => {
  const [canCreate, setCanCreate] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<IOption | null>(null);
  const [inputValue, setInputValue] = useState<string>('');

  const [availableOptions, setAvailableOptions] = useState<IOption[]>(
    options.map((i: string): IOption => createOption(i))
  );

  const platformInputId = nanoid();
  const navigate = useNavigate();
  const location = useLocation();

  // Switches to <CreatableSelect/> to allow inputting a custom platform
  useEffect(() => {
    if (selectedOption?.value !== 'other') return;

    setCanCreate(true);
  }, [selectedOption]);

  // Sets a new created platform as a selectedOption
  useEffect(() => {
    if (availableOptions.length === options.length) return;

    setSelectedOption(availableOptions[availableOptions.length - 1]);
  }, [availableOptions, options]);

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleCreate = (inputValue: string) => {
    const newOption = createOption(inputValue);
    setAvailableOptions(prev => [...prev, newOption]);

    setCanCreate(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSelectedOption(null);
    setInputValue('');

    navigate('/response', { state: { from: location } });
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor={platformInputId}>Platform</label>
      {!canCreate ? (
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
          options={availableOptions}
          // for input
          isSearchable={false}
        />
      ) : (
        <CreatableSelect
          // common
          id={platformInputId}
          name="platform"
          placeholder="Enter your platform here"
          required
          // for create
          isClearable
          onCreateOption={handleCreate}
          // for input
          value={inputValue}
          onInputChange={handleInputChange}
          menuIsOpen={Boolean(inputValue)}
        />
      )}
      <Button text="Submit" />
    </form>
  );
};

export default PlatformSelectForm;
