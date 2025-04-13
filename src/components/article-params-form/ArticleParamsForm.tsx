import { useState, useRef, useEffect } from 'react';
import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Select } from '../select';
import clsx from 'clsx';
import styles from './ArticleParamsForm.module.scss';
import {
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
} from 'src/constants/articleProps';
import { ArticleStateType } from 'src/constants/articleProps';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';
import { Spacing } from '../spacing';

type ArticleParamsFormProps = {
	currentState: ArticleStateType;
	onApply: (state: ArticleStateType) => void;
	onReset: () => void;
};

export const ArticleParamsForm = ({
	currentState,
	onApply,
	onReset,
}: ArticleParamsFormProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [localState, setLocalState] = useState(currentState);

	const sidebarRef = useRef<HTMLDivElement>(null);
	const arrowButtonRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setLocalState(currentState);
	}, [currentState]);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	const handleResetClick = (e: React.MouseEvent) => {
		e.preventDefault();
		onReset();
		setIsOpen(false);
	};

	const handleApplyClick = (e: React.MouseEvent) => {
		e.preventDefault();
		onApply(localState);
		setIsOpen(false);
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				isOpen &&
				sidebarRef.current &&
				!sidebarRef.current.contains(event.target as Node) &&
				arrowButtonRef.current &&
				!arrowButtonRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		const handleEscKey = (event: KeyboardEvent) => {
			if (isOpen && event.key === 'Escape') {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		document.addEventListener('keydown', handleEscKey);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
			document.removeEventListener('keydown', handleEscKey);
		};
	}, [isOpen]);

	return (
		<>
			<div ref={arrowButtonRef}>
				<ArrowButton isOpen={isOpen} onClick={toggleSidebar} />
			</div>
			<aside
				ref={sidebarRef}
				className={clsx(styles.container, { [styles.container_open]: isOpen })}>
				<form className={styles.form}>
					<Select
						selected={localState.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={(option) =>
							setLocalState({ ...localState, fontFamilyOption: option })
						}
						title='Шрифт'
					/>
					<Spacing size={50} />
					<RadioGroup
						name='fontSize'
						selected={localState.fontSizeOption}
						options={fontSizeOptions}
						onChange={(option) =>
							setLocalState({ ...localState, fontSizeOption: option })
						}
						title='Размер шрифта'
					/>
					<Spacing size={50} />
					<Select
						selected={localState.fontColor}
						options={fontColors}
						onChange={(option) =>
							setLocalState({ ...localState, fontColor: option })
						}
						title='Цвет шрифта'
					/>
					<Spacing size={72} />
					<Separator />
					<Spacing size={72} />
					<Select
						selected={localState.backgroundColor}
						options={backgroundColors}
						onChange={(option) =>
							setLocalState({ ...localState, backgroundColor: option })
						}
						title='Цвет фона'
					/>
					<Spacing size={50} />
					<Select
						selected={localState.contentWidth}
						options={contentWidthArr}
						onChange={(option) =>
							setLocalState({ ...localState, contentWidth: option })
						}
						title='Ширина контента'
					/>

					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='button' onClick={handleResetClick} />
						<Button
							title='Применить'
							type='button'
							onClick={handleApplyClick}
						/>
					</div>
				</form>
			</aside>
		</>
	);
};
