<?php

namespace BostonDuckTours;

class GenericFile implements Attachment {

	/**
	 * ID of the attachment.
	 *
	 * @var int
	 */
	private $id;

	public function __construct( int $id ) {
		$this->id = $id;
	}

	/**
	 * @inheritdoc
	 */
	public function get_formatted_data(): array {
		return [
			'ID'  => $this->id,
			'url' => wp_get_attachment_url( $this->id )
		];
	}
}
