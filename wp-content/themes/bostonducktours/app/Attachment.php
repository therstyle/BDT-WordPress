<?php

namespace BostonDuckTours;

interface Attachment {

	/**
	 * Generate the data of the attachment for the frontend.
	 *
	 * @return array
	 */
	public function get_formatted_data(): array;
}
