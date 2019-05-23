<?php

namespace BostonDuckTours;

/**
 * This is helper class to determine browser type
 */
class Browsers {

	/**
	 * Detects IE.
	 */
	public static function is_IE(): bool {
		$ua = htmlentities($_SERVER['HTTP_USER_AGENT'], ENT_QUOTES, 'UTF-8');
		if (preg_match('~MSIE|Internet Explorer~i', $ua) || (strpos($ua, 'Trident/7.0') !== false && strpos($ua, 'rv:11.0') !== false)) {
			return true;
		}

		return false;
	}

	/**
	 * Detects Edge.
	 */
	public static function is_edge(): bool {
		$user_agent = $_SERVER['HTTP_USER_AGENT'];
		return preg_match('/Edge/i', $user_agent);
	}
}
