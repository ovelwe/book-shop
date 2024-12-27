import React from 'react';

import { FilterCheckbox, Title, CheckboxFiltersGroup } from './index';
import { Input } from '@/components/ui/input';
import { RangeSlider } from '../ui';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Со скидкой" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
        <FilterCheckbox text="В наличии" value="3" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input type="number" placeholder="0" min={0} max={5000} defaultValue={0} />
          <Input type="number" min={100} max={5000} placeholder="5000" />
        </div>
        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>

      <CheckboxFiltersGroup
        className="mt-5"
        title="Авторы"
        limit={6}
        defaultItems={[
          {
            text: 'Элизабет Гилберт',
            value: '4',
          },
          {
            text: 'Ник Вуйчич',
            value: '5',
          },
          {
            text: 'Светлана Алексиевич',
            value: '6',
          },
          {
            text: 'Джаннетт Уоллс',
            value: '7',
          },
          {
            text: 'Дженнифер Уорф',
            value: '8',
          },
          {
            text: 'Мршавко Штапич',
            value: '9',
          },
        ]}
        items={[
          {
            text: 'Элизабет Гилберт',
            value: '4',
          },
          {
            text: 'Ник Вуйчич',
            value: '5',
          },
          {
            text: 'Светлана Алексиевич',
            value: '6',
          },
          {
            text: 'Джаннетт Уоллс',
            value: '7',
          },
          {
            text: 'Дженнифер Уорф',
            value: '8',
          },
          {
            text: 'Мршавко Штапич',
            value: '9',
          },
          {
            text: 'Элизабет Гилберт',
            value: '16',
          },
          {
            text: 'Ник Вуйчич',
            value: '17',
          },
          {
            text: 'Светлана Алексиевич',
            value: '18',
          },
          {
            text: 'Джаннетт Уоллс',
            value: '19',
          },
          {
            text: 'Дженнифер Уорф',
            value: '20',
          },
          {
            text: 'Мршавко Штапич',
            value: '21',
          },
        ]}
      />
    </div>
  );
};